export const getColorByDifficulty = (difficulty: string): string => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-400 bg-green-400 bg-opacity-10';
    case 'Intermediate':
      return 'text-yellow-400 bg-yellow-400 bg-opacity-10';
    case 'Advanced':
      return 'text-red-400 bg-red-400 bg-opacity-10';
    default:
      return 'text-gray-400 bg-gray-400 bg-opacity-10';
  }
};

export const difficultyColors = {
  Beginner: {
    badge: 'bg-green-400/10 text-green-400 border-green-400/30',
    bar: 'bg-green-500',
  },
  Intermediate: {
    badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30',
    bar: 'bg-yellow-500',
  },
  Advanced: {
    badge: 'bg-red-400/10 text-red-400 border-red-400/30',
    bar: 'bg-red-500',
  },
};

export const formatDuration = (duration: string): string => {
  return duration;
};

export const calculateProgress = (completedMonths: number[], totalMonths: number): number => {
  return Math.round((completedMonths.length / totalMonths) * 100);
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
