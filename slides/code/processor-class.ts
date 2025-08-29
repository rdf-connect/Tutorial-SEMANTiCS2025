type TemplateArgs = {
   reader: Reader;
   writer: Writer;
   label: string;
};

export class TemplateProcessor extends
      Processor<TemplateArgs> {
   async init(this: TemplateArgs & this):
      Promise<void> {
      // Initialization code here e.g., setting up
      // connections or loading resources
   }

   async transform(this: TemplateArgs & this):
      Promise<void> {
      // Function to start reading channels.
   }

   async produce(this: TemplateArgs & this):
      Promise<void> {
      // Function to start the production of data,
      // starting the pipeline.
   }
}
