import { useRef } from "react";
import { UploadCloud } from "lucide-react";

function UploadDropzone({ onFileSelect }) {
  const inputRef = useRef(null);

  const onDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()}
      className="cursor-pointer rounded-2xl border-2 border-dashed border-leaf-300 bg-leaf-50 p-8 text-center transition hover:border-leaf-500"
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFileSelect(file);
        }}
      />
      <UploadCloud className="mx-auto mb-3 h-10 w-10 text-leaf-700" />
      <p className="font-semibold text-soil-900">Drag & drop grape leaf image here</p>
      <p className="mt-1 text-sm text-soil-600">or click to browse files</p>
    </div>
  );
}

export default UploadDropzone;
