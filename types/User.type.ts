export type EducationType = {
  college: string
  year: string
  degree: string
  course: string
  short: string
}

export type ExperienceType = {
  company: string
  position: string
  dateStarted: string
  dateEnded: string
  short: string
  shortPosition: string
  description: string
  type: string
}

export type FeedType = {
  name: string
  professions?: string[]
  url: string
  image: any
  type: string
  details: string
  tools: string[]
}

export type UserType = {
  id: number
  devName: string
  first_name: string
  middle_name: string
  last_name: string
  email: string
  address: object
  education: EducationType
  links: object[]
  profile: any
  profession: string
  primary_profession: string
  secondary_profession: string
  projects: object[]
  skills: string[]
  techStack: string[]
  feeds: FeedType[]
  experience: ExperienceType[]
}
