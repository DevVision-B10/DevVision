import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
body {
	overflow-y: ${(props) => (props.visible ? 'hidden' : 'auto')};
  overflow-x: hidden;
  font-family: 'Pretendard Variable';
}
div{
	box-sizing: border-box;
}

button{
	border-radius: 15px;
	cursor: pointer;
	padding: 10px;
}
textarea{
  height: 100px;
  resize: none;
  outline: none;
  padding: 10px;
  border: 1px solid var(--peach-color);
  border-radius: 8px;
}
li{
  cursor: pointer;
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
.btn-yellow{
	border: none;
  background-color: var(--yellow-color);
  color: var(--white-color);
  &:hover {
    background-color: var(--darkyellow-color);
    transition: all 0.3s;
  }
}

.btn-submit{
  margin: auto;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: transparent;

  &:hover {
    background-color: var(--yellow-color);
    transition: background-color 0.3s ease-in-out 0s;
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
.font-bigTitle{
  margin: 30px 0px 5px;
  font-weight: 900;
  font-size: 1.8rem;
}
.font-title{
	font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
.font-subTitle{
  font-size: 1.1rem;
  font-weight: 700;
  margin: 10px;
}
.font-strong{
  font-size: 0.8rem;
  font-weight: bold;
}
.font-small{
  margin-right: 20px;
  font-weight: 200;
  font-size: 0.6rem;
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

.border-box{
  padding: 25px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
}
`;
