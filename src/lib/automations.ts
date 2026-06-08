export type WorkflowStatus = 'pending' | 'running' | 'success' | 'failed';

export interface WorkflowAction {
  id: string;
  type: 'api_call' | 'email' | 'data_transform' | 'ai_generate';
  params: Record<string, any>;
}

export interface Workflow {
  id: string;
  name: string;
  actions: WorkflowAction[];
  status: WorkflowStatus;
}

export class AutomationEngine {
  private activeWorkflows: Map<string, Workflow> = new Map();

  async executeWorkflow(workflow: Workflow): Promise<boolean> {
    this.activeWorkflows.set(workflow.id, { ...workflow, status: 'running' });
    
    try {
      for (const action of workflow.actions) {
        await this.runAction(action);
      }
      this.activeWorkflows.set(workflow.id, { ...workflow, status: 'success' });
      return true;
    } catch (error) {
      console.error(`Workflow ${workflow.id} failed:`, error);
      this.activeWorkflows.set(workflow.id, { ...workflow, status: 'failed' });
      return false;
    }
  }

  private async runAction(action: WorkflowAction): Promise<void> {
    // Simulate action delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    switch (action.type) {
      case 'ai_generate':
        console.log(`[AI Gen] Generating content based on: ${action.params.prompt}`);
        break;
      case 'email':
        console.log(`[Email] Sending email to ${action.params.to}`);
        break;
      case 'api_call':
        console.log(`[API Call] Fetching ${action.params.url}`);
        break;
      case 'data_transform':
        console.log(`[Transform] Transforming data...`);
        break;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  getWorkflowStatus(id: string): WorkflowStatus | undefined {
    return this.activeWorkflows.get(id)?.status;
  }
}

export const engine = new AutomationEngine();
