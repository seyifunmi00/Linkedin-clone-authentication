

const InputOptions = ({Icon, title, color}) => {
 return (
  <div className="flex items-center mt-[15px] px-[10px] cursor-pointer hover:bg-[whitesmoke] rounded-xl">
   <Icon style={{ color: color }} />
   <h4 className="ml-2">{title}</h4>
  </div>
 );
};

export default InputOptions;
