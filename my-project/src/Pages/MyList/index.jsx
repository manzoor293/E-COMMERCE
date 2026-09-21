import AccountSidebar from "../../components/AccountSidebar";
import MyListItems from "./MyListItems";

const MyList = () => {
  return (
    <section className="py-10! w-full">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="col1 w-full md:w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-full md:w-[70%]">
          <div className="shadow-md rounded-md p-5! bg-white">
            <div className="py-2! px-3! border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0!">
                There are <span className="font-bold text-primary">2 </span>{" "}
                Products in your list
              </p>
            </div>

            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
