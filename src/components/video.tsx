import { Skeleton } from "@/components/ui/skeleton";

export const VideoSkeleton = () => (
  <section className="w-full py-16 bg-background flex flex-col items-center">
    <div className="container mx-auto px-4">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-background/90 backdrop-blur-md flex justify-center">
        <Skeleton className="w-full h-[500px] rounded-2xl" />
      </div>
    </div>
  </section>
);

const VideoSection = () => {
  return (
    <section className="w-full py-16 bg-background flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-background/90 backdrop-blur-md flex justify-center">
          <video
            className="w-full h-[500px] object-cover"
            src="/Ziybex_Solutions.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
