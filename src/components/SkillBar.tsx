import '@/index.css'


interface SkillBarProps {
  name: string;
  percent: number;
}

const SkillBar = ({ name, percent }: SkillBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-foreground">{name}</span>
      <span className="text-primary font-mono">{percent}%</span>
    </div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-all duration-1000"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default SkillBar;
