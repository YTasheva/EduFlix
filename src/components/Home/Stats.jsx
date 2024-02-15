import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stats() {
    return (
      <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">120k+</h1>
          <p>Education Modules</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">200k</h1>
          <p>Users</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">£200M</h1>
          <p>Education Grants</p>
        </div>
        <div>
          <h1 className="md:text-[40px] text-[25px] font-bold">500k+</h1>
          <p>Tutorials</p>
        </div>
      </section>
    );
  }
