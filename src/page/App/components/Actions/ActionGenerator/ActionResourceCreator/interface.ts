import { ActionType } from "@/redux/currentApp/action/actionState"

export type ConnectionRef = {
  testConnection: () => void
}

export interface ActionResourceCreatorProps {
  actionType?: ActionType
  resourceId?: string
  resourceType?: string
  ResourceFormEditor?: boolean
  back?: () => void
  onSubmit?: (resourceId: string) => void
}
