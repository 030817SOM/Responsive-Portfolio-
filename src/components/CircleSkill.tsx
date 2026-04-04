import '@/index.css'


interface CircleSkillProps {
  name: string;
  percent: number;
}

const CircleSkill = ({ name, percent }: CircleSkillProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            fill="none" strokeWidth="8"
            className="stroke-muted"
          />
          <circle
            cx="50" cy="50" r={radius}
            fill="none" strokeWidth="8" strokeLinecap="round"
            className="stroke-primary transition-all duration-1000"
            style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-primary">
          {percent}%
        </span>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};

export default CircleSkill;
