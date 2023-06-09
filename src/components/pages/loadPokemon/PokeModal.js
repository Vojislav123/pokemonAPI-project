const PokeModal = ({ setIsModalOpen, pokemon }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">


            <div className="flex justify-center">
                <div className="w-6 px-6">

                </div>
            <p className="my-4 px-8 text-slate-500 text-2xl leading-relaxed ">
                {pokemon.name}
              </p>
              <button
                className="text-red-500 background-transparent text-2xl font-bold uppercase px-6  text-sm outline-none focus:outline-none ease-linear transition-all duration-150 flex-end"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
            <div className="relative py-1 px-6 flex-auto">

              <img src={pokemon.imageUrl} alt="Pokemon" className="mx-auto" />

              <div className="grid grid-cols-2 gap-4">
                <div className="mx-5">
                  <h2 className="my-4 text-slate-500 text-2xl bold leading-relaxed">
                    {" "}
                    Weight{" "}
                  </h2>

                  <p className="my-1 text-slate-500 text-lg leading-relaxed">
                    {pokemon.weight}
                  </p>
                  <h2 className="my-4 text-slate-500 text-2xl bold leading-relaxed">
                    {" "}
                    Abilities{" "}
                  </h2>
                  {pokemon.abilities.map((item) => (
                    <p className="my-1 text-slate-500 text-lg leading-relaxed">
                      {item.ability.name}
                    </p>
                  ))}
                </div>
                <div className="pb-6">
                  <h2 className="my-4 text-slate-500 text-2xl bold leading-relaxed">
                    {" "}
                    Height{" "}
                  </h2>

                  <p className="my-1 text-slate-500 text-lg leading-relaxed">
                    {pokemon.height}
                  </p>

                  <h2 className="my-4 text-slate-500 text-2xl bold leading-relaxed">
                    {" "}
                    Types{" "}
                  </h2>
                  {pokemon.types.map((item) => (
                    <p className="my-1 text-slate-500 text-lg leading-relaxed">
                      {item.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PokeModal;
