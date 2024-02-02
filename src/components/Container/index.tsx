interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <div style={{ position: "relative", height: "200px", width: "300px" }}>
      <div style={{
        width: "300px",
        bottom: 0,
        position: "fixed",
        right: "5px"
      }}>
        {children}
      </div>
    </div>)
};

export default Container;
