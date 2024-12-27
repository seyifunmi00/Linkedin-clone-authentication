import {FiberManualRecord, Info} from "@mui/icons-material";


const Widgets = () => {


 const newsArticle = (heading, subtitle)=>{
return  <div className="flex p-[10px] cursor-pointer hover:bg-[whitesmoke]">
   <div className=" mr-1">
    <FiberManualRecord className="text-blue-500 hover:text-blue-700" sx={{ fontSize: '15px' }} />

   </div>

   <div className="flex-1">
    <h4 className="text-[14px] font-bold">{heading}</h4>
    <p className="text-[12px] text-gray-600">{subtitle}</p>
   </div>
  </div>
 }



 return (
  <div className="w-[20%] top-[80px] bg-white border-2 border-gray-200 h-fit pb-[10px] ">
    <div className='flex items-center justify-between p-[10px]'>
     <h2 className='text-[16px] font-[400]'>Linkedin News</h2>
     <Info />
    </div>


   {newsArticle("Seyitan", "Top News-9999 readers")}
   {newsArticle("Seyitan ", "Top News-9999 readers")}
   {newsArticle("Seyitan ", "Top News-9999 readers")}
   {newsArticle("Seyitan", "Top News-9999 readers")}
   {newsArticle("Seyitan", "Top News-9999 readers")}
  </div>
 );
};

export default Widgets;
