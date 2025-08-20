## Description

{:#description}

This tutorial introduces [_RDF-Connect (RDFC)_](https://github.com/rdf-connect/), a novel, language-agnostic framework
for constructing streaming data processing pipelines for RDF and non-RDF data. By leveraging RDF and PROV-O, RDFC
enables seamless integration of data processors in multiple programming languages. The tutorial focuses on pipeline
construction and processor development, equipping participants to build their own streaming workflows.

Participants will gain hands-on experience with RDFC, learning how to build pipelines by chaining modular components (
a.k.a. _processors_) that perform specific operations on (RDF) data streams. The tutorial focuses on implementing custom
processors and integrating them into functioning pipelines. Instead of solving a specific data processing problem, it
demonstrates structuring and managing adaptable (RDF) data workflows across domains and use cases.

To make the learning experience tangible, the tutorial includes a practical project based on a common use case for
SEMANTiCS' audience:
creating a _live_ and multilingual RDF knowledge graph using data from the GeoSphere Austria API. This example
illustrates how different processors can be combined -- such as a REST API client in JavaScript, a Python-based ML model
for language translation, a Java-based RML engine, a SHACL validator, and a triple store (SPARQL) update processor.

The expected outcome will be a functional pipeline created by the participants that integrates both existing and custom
components within the RDFC framework. The pipeline will continuously extract and transform weather forecast data
from the GeoSphere Austria API to RDF. It will then validate the data against a predefined schema using a
SHACL validator. Then, the custom processor, implemented by the participant, will perform language-aware
transformations based on a machine learning model. This processor will translate literal objects tagged as German (
`@de`) into English, generating new triples tagged as English (`@en`). The resulting RDF data will be written into a
triple store using a SPARQL-based processor.

By the end of the tutorial, participants will be able to:

- Design language-independent, modular data processing pipelines.
- Create custom processors for diverse data processing tasks within RDF-Connect.
- Leverage RDF and PROV-O to document and trace pipeline structure and execution.

This tutorial is designed to empower researchers, developers, and data practitioners with the skills to build scalable,
maintainable, and explainable streaming pipelines using RDF-based technologies.

## Motivation

{:#motivation}

As the Semantic Web community embraces increasingly diverse data sources and application domains, there is a growing
need for flexible, interoperable tooling bridging technology, language, and paradigm gaps.
RDFC directly addresses this need by providing a language-agnostic framework for building modular, reusable and
traceable streaming data pipelines.

Semantic Web workflows often use custom tooling in specific languages, leading to brittle, monolithic systems difficult
to maintain, extend, and reuse. RDFC addresses these challenges by defining
a [specification](https://rdf-connect.github.io/specification/) that decouples processing logic from implementation
language and describes pipeline configurations using SHACL and an extension of PROV-O. This approach simplifies
pipeline component combination, reasoning, and sharing across teams and communities.

Moreover, the importance of provenance is more pressing than ever, especially in the current context of AI-generated
content and automated decision-making. RDFC simplifies the publication of machine-readable documentation, in alignment
with the FAIR principles, of data transformations, enhancing transparency, reproducibility, and trust.

This tutorial aims to fill a critical gap in current Semantic Web tooling by introducing a practical, extensible way to
build explainable and modular streaming data pipelines. It is particularly valuable for early-career researchers,
practitioners building real-world applications, and anyone seeking to build more interoperable and maintainable
data-centric systems.

## Format and Schedule

{:#format}

This tutorial is designed as a **full-day session** as outlined in [](#planning). It includes presentations of the
conceptual foundations of the RDFC framework and hands-on implementation.

<figure id="planning" markdown="1" class="table">

|                                     | Topic                                            | Duration |
|-------------------------------------|--------------------------------------------------|----------|
| **Morning: Introduction** (_1:30_)  | Why RDF-Connect?                                 | 0:30     |
|                                     | RDF-Connect architecture & components            | 1:00     |
| *Lunch Break*                       | ---                                              | ---      |
| **Afternoon: Hands-on** (_1:30_)    | Recap: How to implement a RDFC Processor?        | 0:10     |
|                                     | **Hands-on**: Implementing a processor           | 0:35     |
|                                     | Recap: How to build and execute a RDFC Pipeline? | 0:10     |
|                                     | **Hands-on**: Assembling a pipeline              | 0:35     |

<figcaption markdown="block">
Planning of the tutorial
</figcaption>
</figure>


The program is structured into four sessions, two in the morning and two in the afternoon, progressively building from a
conceptual overview to hands-on development.
The day concludes with a collaborative hackathon where participants apply what they have learned to explore extensions
or develop new applications.

The **first session** introduces RDFC's architecture at a high level.
It also provides an overview of the tutorial’s content and a detailed description of the pipeline, participants will
build throughout the day.

The **second session** focuses on processor development. Participants will learn to implement a processor in a
language of choice and configure it for pipeline integration.
They will implement a processor that transforms a stream of RDF triples based on a configured language translation.
The implementation will leverage a lightweight ML model to perform the translations locally.

The **third session** covers pipeline assembly using both existing and the participant's custom-built processor.
Participants will construct a working streaming pipeline that pulls data, applies transformations, validates,
and publishes the results to a triple store.

The **fourth session** is a hackathon, where all participants work together to either extend the pipeline created in the
previous session with new data sources, or build a new pipeline using existing processors to achieve a different goal.
