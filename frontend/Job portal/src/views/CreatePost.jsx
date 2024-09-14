import CreateJob from "../components/forms/CreateJob";

export default function CreatePost() {
  // const [login, setLogin] = useState(true);

  return (
    <div className="container page-wrap pb-4">
      <header>
        <h1 className="text-center pb-4">Add a new job</h1>
        <CreateJob />
      </header>
    </div>
  );
}
