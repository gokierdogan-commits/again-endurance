// NOTE: partial backup — only the two interfaces removed from src/types/index.ts
// during the "Work With Me" rewrite. The rest of that file is unchanged.

export interface CoachingArea {
  id: string
  text: string
}

export interface CoachingFormat {
  id: string
  name: string
  description: string
}
