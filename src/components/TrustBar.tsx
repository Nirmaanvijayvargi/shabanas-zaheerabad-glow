import { Star, Award, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Star, title: "5-Star Rated Salon", desc: "Trusted by 40+ satisfied clients" },
  { icon: Award, title: "Most Trusted in Zaheerabad", desc: "Your local beauty experts since 2023" },
  { icon: Heart, title: "Bridal & Advanced Treatments", desc: "Specializing in wedding beauty" },
  { icon: Users, title: "Experienced & Friendly Staff", desc: "Personalized care for every client" },
];

const TrustBar = () => (
  <section className="bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-sm lg:text-base font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs lg:text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
