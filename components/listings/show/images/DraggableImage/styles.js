import styled from 'styled-components'

export default styled.div`
  min-width: 100%;
  margin-bottom: 2px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 2px 0 #ffffff, 0 4px 30px 0 rgba(38, 38, 38, 0.3);
  opacity: ${({isDragging}) => (isDragging ? 0 : 1)};
  cursor: ${({isDragging}) => (isDragging ? 'grabbing' : 'grab')};
  flex: 1;

  > div.trash {
    position: absolute;
    top: 10px;
    left: 15px;
    cursor: pointer;
    z-index: 2;
    color: white;
    svg {
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
    }
  }
`

export const DraggableWrapper = styled.div`
  box-sizing: border-box;
  border: ${({isDragging}) => (!isDragging ? 'none' : '2px dashed #bababa')};
  border-radius: 4px;
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
`

export const Image = styled.div`
  background-image: ${({img}) => img};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
`
