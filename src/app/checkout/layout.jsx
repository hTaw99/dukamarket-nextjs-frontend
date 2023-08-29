import RequireAuth from "@/app/components/RequireAuth";

const layout = ({ children }) => {
  return <RequireAuth>{[children]}</RequireAuth>;
};

export default layout;
