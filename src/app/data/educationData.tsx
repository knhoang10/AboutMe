export type EducationInfo = {
  time: string,
  degree: string,
  field?: string,
  name: string,
  text: string,
};

export const educationData: EducationInfo[] = [
  {
    time: '2022 - 2023',
    degree: 'Certification in Software Engineering',
    name: 'Hack Reactor',
    text: 'Immersive full-stack program built around modern frameworks, best practices, and team-built, real-world projects.',
  },
  {
    time: '2017 - 2019',
    degree: 'Master of Science in Mechanical Engineering',
    field: 'Systems and Mechanics',
    name: 'University of Connecticut',
    text: 'Continuum mechanics, kinematics, geometric modeling, control systems, and vibration analysis.',
  },
  {
    time: '2013 - 2017',
    degree: 'Bachelor of Science in Mechanical Engineering',
    name: 'University of Connecticut',
    text: 'Mechanics, thermodynamics, materials science, and manufacturing processes.',
  },
];
