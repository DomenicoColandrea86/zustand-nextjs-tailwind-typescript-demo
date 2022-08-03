const Background = ({ children }: any) => {
  return (
    <>
      <section className="w-full h-screen">
        <img src="bg.jpg" className="object-cover w-full h-full" />
      </section>
      <div className="absolute inset-10">{children}</div>
    </>
  );
};

export default Background;
