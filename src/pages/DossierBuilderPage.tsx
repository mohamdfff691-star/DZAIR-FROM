import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormsWizard } from '../components/FormsWizard';
import { SavedDocument } from '../types';

interface DossierBuilderPageProps {
  onSaveToVault?: (doc: SavedDocument) => void;
}

export const DossierBuilderPage: React.FC<DossierBuilderPageProps> = ({ onSaveToVault }) => {
  const [searchParams] = useSearchParams();
  const formId = searchParams.get('form') || undefined;

  return (
    <div className="pt-20 md:pt-28 pb-16">
      <FormsWizard
        initialFormId={formId}
        onSaveToVault={onSaveToVault}
      />
    </div>
  );
};
