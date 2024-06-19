import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
body {
	overflow-y: ${(props) => (props.visible ? 'hidden' : 'auto')}

}
div{
	box-sizing: border-box;
}
button{
	border-radius: 15px;
	cursor: pointer;
	padding: 10px;
}
input{
	padding:8px;
	border-radius: 5px;
	border : 2px solid var(--grey-color);
	&:focus {
    border: 2px solid var(--navy-color);
    outline: none;
  }
}
.btn-dashed{
	width: 100%;
	align-items: center;
  background-color: white;
	background-color: white;
  border: 1px dashed black;
	&:hover {
    font-weight: bold;
  }
}
.btn-navy{
	border: none;
  background-color: var(--navy-color);
  color: var(--white-color);
	&:hover{
		background-color: var(--darknavy-color);
		transition: all 0.3s;
	}
}
.d-flex-row{
	display: flex;
  flex-direction: row;
  gap: 15px;
}
.d-flex-column{
	display: flex;
  flex-direction: column;
  gap: 15px;
}
.font-title{
	font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
.modal{
	width:400px;
	padding: 40px;
  align-items: center;
  background-color: var(--sub-color);
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.back-drop{
	position: fixed;
	top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
	z-index:5;
}
`;
