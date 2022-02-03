export default function Button({ children, onClick, ...rest }) {
  function onClickInterno() {
    console.log('Fui clicado!');
    onClick();
  }

  return (
    <button type="button" onClick={onClickInterno} {...rest}>
      {children}
    </button>
  );
}
