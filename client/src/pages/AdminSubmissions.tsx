import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, Lock } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";

export default function AdminSubmissions() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
    enabled: isAuthenticated,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Admin Access Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  data-testid="input-admin-password"
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full" data-testid="button-admin-login">
                Login
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Default password: <code className="bg-muted px-2 py-1 rounded">admin123</code>
                <br />
                <span className="text-xs">Change this in production!</span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Form Submissions
          </h1>
          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
            data-testid="button-logout"
          >
            Logout
          </Button>
        </div>

        {submissions && submissions.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No submissions yet.</p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {submissions?.map((submission) => (
            <Card key={submission.id} data-testid={`submission-${submission.id}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                  <span>{submission.name}</span>
                  <span className="text-sm font-normal text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(submission.createdAt).toLocaleDateString()} at{" "}
                    {new Date(submission.createdAt).toLocaleTimeString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a
                      href={`tel:${submission.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {submission.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Service Interest:
                  </p>
                  <p className="text-foreground capitalize">{submission.service}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Message:
                  </p>
                  <p className="text-foreground whitespace-pre-wrap">{submission.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
