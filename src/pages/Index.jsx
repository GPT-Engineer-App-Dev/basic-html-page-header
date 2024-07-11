import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to My Website</h1>
        <p className="text-lg text-muted-foreground">Your journey to excellence starts here.</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              This is a placeholder for the main content. Stay tuned for more updates!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;