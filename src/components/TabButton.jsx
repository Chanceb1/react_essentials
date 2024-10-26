export default function TabButton({ children, onSelect, isSelected}) {
  // document.querySelector("button").addEventListener("click", () => {

  // });
  // function clickhandler() {
  //   console.log("hello world");
  // }
  return (
    <li>
      <button className={isSelected ? "active" : ''} onClick={onSelect}>{children}</button>
    </li>
  );
}
