export type TUserData = {
  userName: string,
  email: string,
  phone: string,
  linkedin: string,
  skills?: [{
    skillName: string
    level: "advanced" | "intermediary" | "beginner"
  }],
  experiences?: [{
    companyName: string,
    period: string,
    position: string,
    description: string
  }]
}