import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido" }),
  subject: z.string().min(5, { message: "L'oggetto deve contenere almeno 5 caratteri" }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string;
  delay: number;
}

function ContactInfoItem({ icon, title, content, delay }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
          <i className={`bx ${icon} text-primary`}></i>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-heading font-semibold">{title}</h4>
        <p className="text-neutral mt-1">{content}</p>
      </div>
    </motion.div>
  );
}

interface SocialLinkProps {
  icon: string;
  href: string;
  delay: number;
}

function SocialLink({ icon, href, delay }: SocialLinkProps) {
  return (
    <motion.a 
      href={href}
      className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <i className={`bx ${icon}`}></i>
    </motion.a>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Send form data to API endpoint
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        toast({
          title: "Messaggio inviato!",
          description: "Grazie per averci contattato. Ti risponderemo al più presto.",
        });
        form.reset();
      } else {
        toast({
          title: "Errore",
          description: result.message || "Si è verificato un errore. Riprova più tardi.",
          variant: "destructive",
        });
      }
    })
    .catch(error => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore di connessione. Riprova più tardi.",
        variant: "destructive",
      });
    });
  }

  return (
    <section id="contatti" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Contattaci</h2>
              <p className="text-lg text-neutral mb-8">
                Hai domande sul nostro "Saba-to-build"? Vuoi partecipare o hai suggerimenti da condividere? Contattaci!
              </p>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon="bx-map" 
                  title="Indirizzo" 
                  content="Via Roma 123, 00100 Roma"
                  delay={0.1}
                />
                
                <ContactInfoItem 
                  icon="bx-envelope" 
                  title="Email" 
                  content="info@sabatobuild.it"
                  delay={0.2}
                />
                
                <ContactInfoItem 
                  icon="bx-phone" 
                  title="Telefono" 
                  content="+39 01 2345 6789"
                  delay={0.3}
                />
                
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h4 className="text-lg font-heading font-semibold mb-4">Seguici</h4>
                  <div className="flex space-x-4">
                    <SocialLink icon="bxl-instagram" href="#" delay={0.5} />
                    <SocialLink icon="bxl-facebook" href="#" delay={0.6} />
                    <SocialLink icon="bxl-whatsapp" href="#" delay={0.7} />
                    <SocialLink icon="bxl-telegram" href="#" delay={0.8} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-heading font-semibold mb-6">Mandaci un messaggio</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral">Nome</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Il tuo nome" 
                              {...field} 
                              className="border-gray-200 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="La tua email" 
                              type="email" 
                              {...field} 
                              className="border-gray-200 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral">Oggetto</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Oggetto del messaggio" 
                              {...field} 
                              className="border-gray-200 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral">Messaggio</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Il tuo messaggio" 
                              rows={4} 
                              {...field} 
                              className="border-gray-200 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-white hover:bg-primary/90 font-heading font-semibold"
                      >
                        Invia Messaggio
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
