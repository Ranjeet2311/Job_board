import CreateJob from "../components/forms/CreateJob";

export default function CreatePost() {
  // const [login, setLogin] = useState(true);

  return (
    <div className="container">
      <header>
        <h1 className="text-center">You are creating new post</h1>
        <CreateJob />
      </header>
    </div>
  );
}
