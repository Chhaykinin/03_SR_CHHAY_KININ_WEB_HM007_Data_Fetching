import BannerComponent from "@/components/BannerComponent";
import CardComponent from "@/components/CardComponent";
export default function Home() {
  // const data= await getAllMovieService();
  return (
    <main className="bg-red-700">
      <BannerComponent />
      <CardComponent />
      {/* <h1 className="text-white p-3 bg-black text-2xl"> All Action &gt;</h1>
      <CardComponent/> */}
      
    </main>
  );
}
