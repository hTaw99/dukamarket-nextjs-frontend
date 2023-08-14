import { useCreateAddress } from "@/apis/address";
import { useForm } from "react-hook-form";

const AddressForm = ({ setAddingNewAddress, addingNewAddress }) => {
  const { mutate: addAddress } = useCreateAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const buildingArr = data.building.split("/");
    const buildingName = buildingArr[0];
    const apartmentNumber = +buildingArr[1];
    const floorsNumber = +buildingArr[2];

    const address = {
      ...data,
      building: buildingName,
      apartment: apartmentNumber,
      floor: floorsNumber,
    };

    addAddress(address);
    addingNewAddress && setAddingNewAddress(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-2/5 mx-auto flex flex-col gap-4"
    >
      <div>
        <input
          placeholder="Full Name"
          className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("fullname", {
            required: "Please provide your full name ",
          })}
        />
        <span className="text-xs text-red-500">{errors.fullname?.message}</span>
      </div>
      <div>
        <select
          className="relative block w-full appearance-none rounded-md  border 
              outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("goverment", {
            required: "Area is required ",
          })}
        >
          <option value="">--Select goverment--</option>
          <option value="cairo">Cairo</option>
          <option value="giza">Giza</option>
          <option value="suez">Suez</option>
        </select>

        <span className="text-xs text-red-500">
          {errors.goverment?.message}
        </span>
      </div>

      <div>
        <select
          className="relative block w-full appearance-none rounded-md  border 
              outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("area", {
            required: "City is required ",
          })}
        >
          <option value="">--Select area--</option>
          <option value="cairo">Dar El-Salam</option>
          <option value="giza">El Sayeda Zaineb</option>
          <option value="suez">El Maadi</option>
        </select>

        <span className="text-xs text-red-500">{errors.area?.message}</span>
      </div>

      <div>
        <input
          placeholder="Email"
          className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("email", {
            required: "Please provide your email ",
          })}
        />

        <span className="text-xs text-red-500">{errors.email?.message}</span>
      </div>

      <div className="flex gap-2 items-center">
        <span className="font-semibold text-sm text-gray-800 ">+2</span>
        <div className="flex-grow">
          <input
            placeholder="XXXXXXXXX"
            type="tel"
            className="relative block w-full appearance-none rounded-md  border 
                  outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
            {...register("phone", {
              valueAsNumber: true,
              required: "Please provide your phone number ",
            })}
          />

          <span className="text-xs text-red-500">{errors.phone?.message}</span>
        </div>
      </div>

      <div>
        <input
          placeholder="Address"
          type="text"
          className=" relative block w-full appearance-none rounded-md  border 
                  outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("street", {
            required: "Please provide your address ",
          })}
        />

        <span className="text-xs text-red-500">{errors.street?.message}</span>
      </div>

      <div>
        <input
          placeholder="Building name/Apartment No./Floors No."
          type="text"
          className=" relative block w-full appearance-none rounded-md  border 
                  outline-none border-gray-300 p-2 text-gray-900 placeholder-gray-500  text-sm md:text-base"
          {...register("building")}
        />

        <span className="text-xs text-red-500">{errors.building?.message}</span>
      </div>

      {/* <div className="flex gap-2 items-center relative">
        <input
          className=" appearance-none  w-5 h-5 checked:bg-red-500 checked:border-red-500 focus:outline-none rounded-md border border-neutral-300 cursor-pointer"
          type="checkbox"
          id="shipping-address"
          defaultChecked
          // defaultValue={true}
          {...register("useAsShippingAddress")}
        />
        <FaCheck
          size={12}
          className="text-white absolute left-[4px] pointer-events-none"
        />
        <label className="text-xs text-gray-800" htmlFor="shipping-address">
          Use as my shipping address
        </label>
      </div> */}

      <button
        type="submit"
        className="text-xs md:text-sm font-bold bg-red-500 text-white p-2 uppercase rounded-md"
      >
        add address
      </button>
    </form>
  );
};

export default AddressForm;
