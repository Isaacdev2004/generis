import { useParams, Link } from 'wouter';
import { useState, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  useGetPortalProject,
  useListProjectMessages,
  useSendProjectMessage,
  getGetPortalProjectQueryKey,
  getListProjectMessagesQueryKey,
} from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = Number(params.id);
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState('');

  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const stored = localStorage.getItem('portal_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const { data: project, isLoading: projectLoading } = useGetPortalProject(projectId, {
    query: {
      enabled: !!projectId,
      queryKey: getGetPortalProjectQueryKey(projectId),
    },
  });

  const { data: messages = [], isLoading: messagesLoading } = useListProjectMessages(projectId, {
    query: {
      enabled: !!projectId,
      queryKey: getListProjectMessagesQueryKey(projectId),
    },
  });

  const sendMessage = useSendProjectMessage();

  const handleSendMessage = () => {
    if (!message.trim() || !user) return;

    sendMessage.mutate(
      {
        id: projectId,
        data: {
          senderType: 'client',
          senderName: user.name,
          message: message.trim(),
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getListProjectMessagesQueryKey(projectId) });
          setMessage('');
          toast({ title: 'Message sent', description: 'Your message has been sent to the team.' });
        },
        onError: (error: any) => {
          toast({
            title: 'Failed to send message',
            description: error?.message || 'Please try again.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Please sign in to view project details.</p>
            <Button asChild className="mt-4">
              <Link href="/portal">Go to Portal</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (projectLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Project not found.</p>
            <Button asChild className="mt-4">
              <Link href="/portal">Back to Portal</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          data-testid="link-project-back"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Service Type</p>
                  <p className="font-semibold">{project.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Company</p>
                  <p className="font-semibold">{project.companyName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {project.status.replace(/_/g, ' ')}
                  </div>
                </div>
                {project.tenderDeadline && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tender Deadline</p>
                    <p className="font-semibold">
                      {new Date(project.tenderDeadline).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Created</p>
                  <p className="text-sm">
                    {new Date(project.createdAt).toLocaleDateString('en-GB')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 space-y-4 mb-4 max-h-[500px] overflow-y-auto">
                  {messagesLoading ? (
                    <p className="text-sm text-muted-foreground">Loading messages...</p>
                  ) : messages.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No messages yet. Start a conversation!</p>
                  ) : (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-4 rounded-lg ${
                          msg.senderType === 'client'
                            ? 'bg-primary text-primary-foreground ml-8'
                            : 'bg-muted mr-8'
                        }`}
                      >
                        <p className="text-xs font-medium mb-1">{msg.senderName}</p>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {new Date(msg.createdAt).toLocaleString('en-GB')}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none"
                    rows={3}
                    data-testid="input-project-message"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || sendMessage.isPending}
                    size="icon"
                    className="self-end"
                    data-testid="button-send-message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
