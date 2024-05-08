export interface EventSubmitCognitoForm {
  data: {
    auditRecordId: string;
    documents: any;
    entry: string;
  };
  type: string;
  defaultPrevented: boolean;
}
