"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FilesPage: React.FC = () => {
  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Files</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Manage your files here. Upload, view, and organize your documents
            easily.
          </p>
          <Button className="mt-4">Upload File</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilesPage;
