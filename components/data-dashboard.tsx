'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  Activity,
  Database,
  Zap,
  Globe
} from 'lucide-react'

export function DataDashboard() {
  const [currentTime, setCurrentTime] = React.useState<Date | null>(null)

  React.useEffect(() => {
    // Set initial time after component mounts on client
    setCurrentTime(new Date())
    
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const metrics = [
    {
      title: "Active Projects",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Data Points Annotated",
      value: "2.4M",
      change: "+8.2%",
      trend: "up",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Accuracy Rate",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-emerald-600"
    },
    {
      title: "Avg. Turnaround",
      value: "18hrs",
      change: "-15%",
      trend: "down",
      icon: Clock,
      color: "text-purple-600"
    }
  ]

  const projectData = [
    { name: "Healthcare AI", progress: 85, status: "On Track", color: "bg-blue-500" },
    { name: "Autonomous Vehicles", progress: 92, status: "Ahead", color: "bg-green-500" },
    { name: "Financial Analytics", progress: 67, status: "In Progress", color: "bg-yellow-500" },
    { name: "Retail Intelligence", progress: 78, status: "On Track", color: "bg-purple-500" },
    { name: "Security Systems", progress: 94, status: "Near Complete", color: "bg-emerald-500" }
  ]

  const recentActivity = [
    { action: "Image annotation completed", project: "MedAI Dataset", time: "2 min ago", icon: CheckCircle, color: "text-green-600" },
    { action: "Quality review passed", project: "AutoDrive V3", time: "5 min ago", icon: Target, color: "text-blue-600" },
    { action: "New project started", project: "FinTech Analytics", time: "12 min ago", icon: Activity, color: "text-purple-600" },
    { action: "Milestone achieved", project: "Retail Vision", time: "18 min ago", icon: TrendingUp, color: "text-emerald-600" }
  ]

  const globalStats = [
    { region: "North America", projects: 18, color: "bg-blue-500" },
    { region: "Europe", projects: 14, color: "bg-green-500" },
    { region: "Asia Pacific", projects: 12, color: "bg-purple-500" },
    { region: "Others", projects: 3, color: "bg-gray-400" }
  ]

  return (
    <div className="w-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-lg p-6 rounded-2xl border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Annotation Dashboard</h2>
          <p className="text-slate-600 dark:text-slate-400">Real-time project monitoring & analytics</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{metric.title}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-green-600 mr-1" />
                    )}
                    <span className="text-xs text-green-600">{metric.change}</span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <Card className="lg:col-span-2 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Active Projects
            </CardTitle>
            <CardDescription>Current annotation projects and their progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectData.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${project.color}`} />
                    <span className="font-medium text-slate-900 dark:text-white">{project.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity & Global Distribution */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-700">
                    <activity.icon className={`w-3 h-3 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{activity.project}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Global Distribution */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Global Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {globalStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{stat.region}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {stat.projects}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}