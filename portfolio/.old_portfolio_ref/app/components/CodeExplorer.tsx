"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, FileText, Folder, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeFile {
  name: string;
  language: string;
  content: string;
  icon: string;
}

interface CodeProject {
  id: string;
  title: string;
  description: string;
  files: CodeFile[];
  color: string;
}

export default function CodeExplorer() {
  const [selectedProject, setSelectedProject] = useState<string>("cuddle-box");
  const [selectedFile, setSelectedFile] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const projects: CodeProject[] = [
    {
      id: "cuddle-box",
      title: "Cuddle Box - App Store",
      description: "Sustainable marketplace for secondhand goods",
      color: "from-cyan-500/20 to-cyan-600/10",
      files: [
        {
          name: "ContentView.swift",
          language: "swift",
          icon: "📄",
          content: `import SwiftUI

struct ContentView: View {
  @StateObject var viewModel = MarketplaceViewModel()
  @State private var searchText = ""
  
  var body: some View {
    NavigationStack {
      ZStack {
        Color(.systemBackground)
          .ignoresSafeArea()
        
        VStack(spacing: 16) {
          SearchBar(text: $searchText)
          
          ScrollView {
            LazyVGrid(
              columns: [GridItem(.flexible()), GridItem(.flexible())],
              spacing: 12
            ) {
              ForEach(viewModel.filteredProducts) { product in
                ProductCard(product: product)
              }
            }
            .padding(.horizontal)
          }
        }
      }
      .navigationTitle("Cuddle Box")
    }
  }
}`,
        },
        {
          name: "FirebaseService.swift",
          language: "swift",
          icon: "🔥",
          content: `import Firebase
import FirebaseFirestore
import FirebaseAuth

class FirebaseService {
  static let shared = FirebaseService()
  private let db = Firestore.firestore()
  
  func fetchProducts(limit: Int = 20) async throws -> [Product] {
    let snapshot = try await db
      .collection("products")
      .order(by: "createdAt", descending: true)
      .limit(to: limit)
      .getDocuments()
    
    return snapshot.documents.compactMap { doc in
      try doc.data(as: Product.self)
    }
  }
  
  func createProduct(_ product: Product) async throws {
    try await db.collection("products")
      .document(product.id)
      .setData(from: product)
  }
}`,
        },
        {
          name: "MarketplaceViewModel.swift",
          language: "swift",
          icon: "🎯",
          content: `import Foundation
import Combine

@MainActor
class MarketplaceViewModel: ObservableObject {
  @Published var products: [Product] = []
  @Published var isLoading = false
  @Published var searchText = ""
  
  var filteredProducts: [Product] {
    guard !searchText.isEmpty else { return products }
    return products.filter { product in
      product.title.localizedCaseInsensitiveContains(searchText)
    }
  }
  
  func loadProducts() async {
    isLoading = true
    defer { isLoading = false }
    
    do {
      products = try await FirebaseService.shared.fetchProducts()
    } catch {
      print("Error loading products: \\(error)")
    }
  }
}`,
        },
      ],
    },
    {
      id: "portfolio-web",
      title: "Portfolio Website",
      description: "Next.js portfolio with interactive components",
      color: "from-purple-500/20 to-purple-600/10",
      files: [
        {
          name: "CaseStudies.tsx",
          language: "typescript",
          icon: "📋",
          content: `"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };
  
  return (
    <section className="py-20 sm:py-32 bg-slate-950">
      <motion.div
        variants={containerVariants}
        className="space-y-6"
      >
        {/* Case studies grid */}
      </motion.div>
      
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal content */}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}`,
        },
        {
          name: "SkillsExperience.tsx",
          language: "typescript",
          icon: "💼",
          content: `"use client";

import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export default function SkillsExperience() {
  const experienceData: Experience[] = [
    {
      title: "Founder & Product Engineer",
      company: "Cuddle Box",
      period: "2023 - Present",
      description: "Built and shipped a sustainable marketplace",
      highlights: [
        "Architected full-stack mobile app",
        "Grew to 1k+ users",
        "23% conversion rate"
      ]
    }
  ];
  
  return (
    <section className="py-32 bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Timeline visualization */}
      </motion.div>
    </section>
  );
}`,
        },
        {
          name: "ThemeContext.tsx",
          language: "typescript",
          icon: "🎨",
          content: `"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");
  }, []);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme outside ThemeProvider");
  return context;
}`,
        },
      ],
    },
    {
      id: "ai-integration",
      title: "AI Integration Project",
      description: "LLM-powered analytics and insights",
      color: "from-orange-500/20 to-orange-600/10",
      files: [
        {
          name: "llmService.ts",
          language: "typescript",
          icon: "🤖",
          content: `import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateInsights(data: string): Promise<string> {
  const message = await openai.messages.create({
    model: "gpt-4",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: \`Analyze this data and provide key insights:\\n\\n\${data}\`
      }
    ]
  });
  
  return message.content[0].type === "text" ? message.content[0].text : "";
}

export async function summarizeMetrics(metrics: Record<string, number>) {
  const dataStr = Object.entries(metrics)
    .map(([key, value]) => \`\${key}: \${value}\`)
    .join("\\n");
  
  return generateInsights(dataStr);
}`,
        },
        {
          name: "analyticsAPI.ts",
          language: "typescript",
          icon: "📊",
          content: `import { NextRequest, NextResponse } from "next/server";
import { generateInsights } from "@/lib/llmService";

export async function POST(request: NextRequest) {
  try {
    const { analyticsData } = await request.json();
    
    const insights = await generateInsights(analyticsData);
    
    return NextResponse.json({
      success: true,
      insights,
      timestamp: new Date()
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate insights" },
      { status: 500 }
    );
  }
}`,
        },
      ],
    },
  ];

  const currentProject = projects.find(p => p.id === selectedProject)!;
  const currentFile = currentProject.files[selectedFile];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 sm:py-32 bg-slate-900 dark:bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-2xl mb-12 space-y-4"
        >
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
              Code Explorer
            </h2>
          </div>
          <p className="text-lg text-slate-400">
            Interactive showcase of code architecture and implementation patterns.
          </p>
        </motion.div>

        {/* Main Explorer */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Project Selector */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
              Projects
            </h3>
            <div className="space-y-2">
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project.id);
                    setSelectedFile(0);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedProject === project.id
                      ? "bg-cyan-500/20 border border-cyan-500/50 text-cyan-400"
                      : "bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-600"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{project.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Code Editor */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-4"
          >
            {/* File Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2">
              {currentProject.files.map((file, idx) => (
                <motion.button
                  key={file.name}
                  onClick={() => setSelectedFile(idx)}
                  className={`px-3 py-2 rounded-t-lg text-sm font-mono whitespace-nowrap transition-colors ${
                    selectedFile === idx
                      ? "bg-slate-700 text-slate-100 border-b-2 border-cyan-500"
                      : "bg-slate-800 text-slate-400 hover:text-slate-300"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <FileText className="w-4 h-4 inline mr-1" />
                  {file.name}
                </motion.button>
              ))}
            </div>

            {/* Code Display */}
            <motion.div
              layout
              className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between bg-slate-900 border-b border-slate-700 px-4 py-2">
                <span className="text-xs font-mono text-slate-500">
                  {currentFile.language}
                </span>
                <motion.button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>

              {/* Code Content */}
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed"
              >
                <code>{currentFile.content}</code>
              </motion.pre>
            </motion.div>

            {/* Description */}
            <motion.div
              className="p-4 rounded-lg bg-slate-800/50 border border-slate-700"
              whileHover={{ borderColor: "rgb(100, 116, 139)" }}
            >
              <p className="text-sm text-slate-400">
                <span className="text-slate-300 font-semibold">
                  {currentProject.title}
                </span>
                {" — "}
                {currentProject.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
