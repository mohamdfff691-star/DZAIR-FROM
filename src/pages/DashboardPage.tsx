import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardAndVault } from '../components/DashboardAndVault';
import { SavedDocument } from '../types';

interface DashboardPageProps {
  savedDocuments: SavedDocument[];
  onDeleteDocument: (id: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  savedDocuments,
  onDeleteDocument
}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 md:pt-28 pb-16">
      <DashboardAndVault
        savedDocuments={savedDocuments}
        onDeleteDocument={onDeleteDocument}
        onOpenWizard={() => navigate('/dossier-builder')}
      />
    </div>
  );
};
