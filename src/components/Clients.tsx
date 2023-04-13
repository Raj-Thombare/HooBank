import { clients } from "../constants";

const Clients: React.FC = () => {
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map((client) => (
          <div key={client.id} className="flex justify-center items-center flex-1 sm:min-w-[192px] min-w-[120px]">
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
