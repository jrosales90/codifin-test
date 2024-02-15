import Navbar from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

const GenericLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="md:p-10 p-5">{children}</div>
    </>
  );
};

export default GenericLayout;
