import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";

export default function AdminSubmissions() {
  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
  });

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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Contact Form Submissions
        </h1>

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
