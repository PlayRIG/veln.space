import {velnFeatures} from "src/data";
import {cn} from "src/utils/cn";

export const CardStand = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {velnFeatures.map((feature, featureIdx) => (
          <div
            key={feature.id}
            className="flex flex-col overflow-hidden border border-[#CFCFCF] shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={feature.effect.src}
                  alt={`effect-${featureIdx}`}
                  className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                />

                <img
                  src={feature.cover.src}
                  alt={feature.title}
                  className={cn(
                    [2, 3].includes(featureIdx) ? "object-contain" : "object-cover",
                    "pointer-events-none h-full w-full select-none drop-shadow-sm",
                  )}
                />
              </div>
            </div>

            <div className="flex-1 border-t border-[#CFCFCF] px-5 py-6">
              <p className="mb-2 font-mono text-xs font-medium text-zinc-400">
                {feature.id}
              </p>
              <h3 className="mb-3 text-sm font-bold uppercase leading-tight tracking-wide text-zinc-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
