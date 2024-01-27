import { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState<File | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);

      // TODO: implement backend stuff
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      console.log(res);

      if (res.ok) {
        console.log('File uploaded successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFile(file);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-gray-100 p-5 rounded-lg">
        <h1 className="text-4xl text-center my-4">Upload a file</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="bg-gray-900 text-zinc-100 p-2 rounded block mb-2"
            onChange={handleFileChange}
          />
          <button
            className="bg-blue-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
            disabled={!file}
          >
            Upload
          </button>
        </form>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            className="w-64 h-64 object-contain mx-auto"
            width={256}
            height={256}
          />
        )}
      </div>
    </div>
  );
}

export default UploadFile;
