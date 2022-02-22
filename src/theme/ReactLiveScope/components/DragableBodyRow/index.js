import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import './drag-sorting.css';

const TYPE = 'DraggableBodyRow';
export const DraggableBodyRow = ({index, moveRow, className, style, ...restProps}) => {

  const ref = useRef(null);
  const [{isOver, dropClassName}, drop] = useDrop({
    accept: TYPE,
    collect: monitor => {
      const {index: dragIndex} = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [{isDragging}, drag] = useDrag({
    item: {
      type: TYPE,
      index: index
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  });
  drop(drag(ref));
  return (
    <div
      ref={ref}
      className={`${className} draggable-body-row${isOver ? dropClassName : ''}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        ...style
      }}
      {...restProps}
    />
  );

};
