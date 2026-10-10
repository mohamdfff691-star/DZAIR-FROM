export interface Wilaya {
  code: string;
  nameAr: string;
  nameFr: string;
  dairas?: string[];
}

export interface GovernmentPortal {
  id: string;
  title: string;
  category: 'housing' | 'employment' | 'civil_status' | 'education' | 'justice' | 'finance';
  description: string;
  url: string;
  status: 'online' | 'busy' | 'scheduled';
  requiredDocs: string[];
  associatedFormId?: string;
  tags: string[];
}

export interface FormTemplate {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  ministry: string;
  description: string;
  requiredAttachments: string[];
  fields: FormField[];
  previewType: 'aadl' | 'anem' | 'civil_status' | 'request_letter' | 'affidavit' | 'onefd' | 'appeal';
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea';
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean;
  helpText?: string;
  gridSpan?: 1 | 2 | 3;
}

export interface SavedDocument {
  id: string;
  templateId: string;
  title: string;
  clientName: string;
  nin?: string;
  wilaya: string;
  createdAt: string;
  formData: Record<string, any>;
  feeCharged?: number;
  status: 'ready' | 'printed' | 'archived';
}

export interface ResearchPaper {
  title: string;
  subject: string;
  level: string;
  studentName?: string;
  institution?: string;
  academicYear?: string;
  introduction: string;
  outline: { chapter: string; sections: string[] }[];
  content: { heading: string; body: string }[];
  conclusion: string;
  references: string[];
}
