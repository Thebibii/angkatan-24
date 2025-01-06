import { ArrowUpRight } from "lucide-react";
import Safari from "../safari";
import ShimmerButton from "../shimmer-button";

export function SafariDemo({ src, title, by }: any) {
  return (
    <div className="relative">
      <div className="flex flex-col space-y-4">
        <Safari src={src} className="size-full rounded-md" />
        <div className="flex flex-col space-y-3">
          <div>
            <h1 className="text-2xl font-semibold text-primary">{title}</h1>
            <p className="text-muted-foreground">{by}</p>
          </div>
          <ShimmerButton
            className="shadow-2xl w-fit ring-1 py-1 px-6 ring-black"
            background="#ffff"
            shimmerColor="#182955"
            borderRadius="14px"
            shimmerSize="0.1em"
            href="https://www.instagram.com/sisteminformasi.pnp/"
          >
            <span className="inline-flex items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-primary dark:from-white dark:to-slate-900/10 lg:text-base">
              Let's Go
              <ArrowUpRight className="size-5 ml-1" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
