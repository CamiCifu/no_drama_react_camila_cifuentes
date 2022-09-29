export const MainContent = (props) => {
  const { titulo, children } = props;
  return (
    <section>
      <h2 style={{ margin: "3rem" }}>{titulo}</h2>
      {children}
    </section>
  );
};
