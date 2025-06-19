'use client'
import React, { memo } from 'react'
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
  BarChart3,
  Activity,
  Database,
  Globe
} from 'lucide-react'

// Memoized components for better performance
const MetricCard = memo(({ metric, index }: { metric: any, index: number }) => (
  <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
    <CardContent className="p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{metric.title}</p>
          <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</p>
          <div className="flex items-center mt-1">
            {metric.trend === 'up' ? (
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-3 h-3 text-green-600 mr-1" />
            )}
            <span className="text-xs text-green-600">{metric.change}</span>
          </div>
        </div>
        <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${metric.color}`} />
      </div>
    </CardContent>
  </Card>
))

const ProjectProgress = memo(({ project, index }: { project: any, index: number }) => {
  // Ensure progress is a valid number between 0 and 100
  const progressValue = Math.min(Math.max(Number(project.progress) || 0, 0), 100);
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${project.color}`} />
          <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base truncate">{project.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {project.status}
          </Badge>
          <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {progressValue}%
          </span>
        </div>
      </div>
      <Progress value={progressValue} max={100} className="h-1.5 sm:h-2" />
    </div>
  )
})


const ActivityItem = memo(({ activity, index }: { activity: any, index: number }) => (
  <div className="flex items-start gap-2 sm:gap-3">
    <activity.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${activity.color} flex-shrink-0 mt-0.5`} />
    <div className="flex-1 min-w-0">
      <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white truncate">
        {activity.action}
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-400 truncate">{activity.project}</p>
      <p className="text-xs text-slate-500 dark:text-slate-500">{activity.time}</p>
    </div>
  </div>
))

export function DataDashboard() {
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
    <div className="w-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-lg p-3 sm:p-6 rounded-2xl border">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">Annotation Dashboard</h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Real-time project monitoring & analytics</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} index={index} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Active Projects */}
        <Card className="lg:col-span-2 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              Active Projects
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Current annotation projects and their progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            {projectData.map((project, index) => (
              <ProjectProgress key={index} project={project} index={index} />
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity & Global Distribution */}
        <div className="space-y-4 sm:space-y-6">
          {/* Recent Activity */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {recentActivity.map((activity, index) => (
                <ActivityItem key={index} activity={activity} index={index} />
              ))}
            </CardContent>
          </Card>

          {/* Global Distribution */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                Global Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {globalStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${stat.color}`} />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.region}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
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

export default DataDashboard