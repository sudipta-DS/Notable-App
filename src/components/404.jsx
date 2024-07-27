import notFound from "../assets/not-found.png";

function NotfoundPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <img
        src={notFound}
        alt="notes not found"
        className="h-96 w-96 bg-inherit"
      />
    </div>
  );
}

export default NotfoundPage;
