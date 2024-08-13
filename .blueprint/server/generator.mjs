import command from './command.mjs';

// eslint-disable-next-line import/prefer-default-export
export async function createGenerator(ev) {
  let BaseApplicationGenerator;
  try {
    // Try to use locally installed generator-jhipster
    BaseApplicationGenerator = (await import('generator-jhipster/generators/base-application')).default;
  } catch {
    // Fallback to the currently running jhipster.
    const jhipsterGenerator = 'jhipster:server';
    BaseApplicationGenerator = await env.requireGenerator(jhipsterGenerator);
  }

  return class extends BaseApplicationGenerator {
    constructor(args, opts, features) {
      super(args, opts, { ...features, sbsBlueprint: true });
    }

    get [BaseApplicationGenerator.INITIALIZING]() {
      return this.asInitializingTaskGroup({
        async initializingTemplateTask() {
          this.parseJHipsterArguments(command.arguments);
          this.parseJHipsterOptions(command.options);
        },
      });
    }

    get [BaseApplicationGenerator.PROMPTING]() {
      return this.asPromptingTaskGroup({
        async promptingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.CONFIGURING]() {
      return this.asConfiguringTaskGroup({
        async configuringTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.COMPOSING]() {
      return this.asComposingTaskGroup({
        async composingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.COMPOSING_COMPONENT]() {
      return this.asComposingComponentTaskGroup({
        async composingComponentTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.LOADING]() {
      return this.asLoadingTaskGroup({
        async loadingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.PREPARING]() {
      return this.asPreparingTaskGroup({
        async preparingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.POST_PREPARING]() {
      return this.asPostPreparingTaskGroup({
        async postPreparingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.DEFAULT]() {
      return this.asDefaultTaskGroup({
        async defaultTemplateTask() {},
      });
    }

     get [BaseApplicationGenerator.WRITING]() {
          return this.asWritingTaskGroup({
            async writingTemplateTask() {
              const templatePath = this.templatePath('DemoRepository.java.ejs');
              const destinationPath = this.destinationPath('src/main/resources/DemoRepository.java');

              const context = {
                application: this.options.application || {},
              };

              this.fs.copyTpl(templatePath, destinationPath, context);
//
              this.fs.copyTpl(
                this.templatePath,
                this.destinationPath(),
                this.props
              );

              this.log("Template file written successfully to", destinationPath);
            },
          });
        }

    get [BaseApplicationGenerator.MULTISTEP_TRANSFORM]() {
      return this.asMultistepTransformTaskGroup({
        async multistepTransformTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.POST_WRITING]() {
      return this.asPostWritingTaskGroup({
        async postWritingTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.TRANSFORM]() {
      return this.asTransformTaskGroup({
        async transformTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.INSTALL]() {
      return this.asInstallTaskGroup({
        async installTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.POST_INSTALL]() {
      return this.asPostInstallTaskGroup({
        async postInstallTemplateTask() {},
      });
    }

    get [BaseApplicationGenerator.END]() {
      return this.asEndTaskGroup({
        async endTemplateTask() {},
      });
    }
  };
}
